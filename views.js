// Get a reference to the PDF viewer container and canvas element
const pdfViewer = document.getElementById("pdf-viewer");
const canvas = document.getElementById("pdf-render");

// Path to your PDF file
const pdfFile = "assets/Wedding Brochure.pdf";

// Initialize the PDF.js viewer
// pdfjsLib.GlobalWorkerOptions.workerSrc = "path/to/pdf.worker.js";
pdfjsLib.GlobalWorkerOptions.workerSrc = "Z/build/pdf.worker.js";

// Load and render the PDF
pdfjsLib.getDocument(pdfFile).then((pdfDoc) => {
  // Set the total number of pages
  const numPages = pdfDoc.numPages;

  // Initialize the first page
  let pageNum = 1;

  // Render the first page
  renderPage(pageNum);

  function renderPage(num) {
    pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport({ scale: 1.0 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };

      page
        .render(renderContext)
        .promise.then(() => {
          // Page rendered successfully
        })
        .catch((error) => {
          console.error("Error rendering page: " + error);
        });
    });
  }
});
