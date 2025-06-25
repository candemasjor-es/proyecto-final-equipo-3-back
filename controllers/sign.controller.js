const fs = require("fs");
const path = require("path");

const getSign = async (erq, res) => {
  const { _id } = req.params;
  const filePath = path.join(__dirname, "../public/firmas", `${_id}.png`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ message: "Firma no encontrada" });
  }
};

const createSign = async (req, res) => {
  try {
    const { image, userId } = req.body;

    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    const filePath = path.join(__dirname, "../public/firmas", `${userId}.png`);

    fs.writeFileSync(filePath, base64Data, "base64");

    res.status(200).json({ message: "Firma guardada correctamente" });
  } catch (error) {
    console.error("Error al guardar firma:", error);
    res.status(500).json({ message: "Error al guardar la firma" });
  }
};

module.exports = { getSign, createSign };
