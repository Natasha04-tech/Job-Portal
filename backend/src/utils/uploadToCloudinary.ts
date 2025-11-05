import cloudinary from "../config/cloudinaryConfig";

export const uploadPDFToCloudinary = async (fileBuffer: Buffer, folder = "pdf_uploads") => {
  const fileStr = `data:application/pdf;base64,${fileBuffer.toString("base64")}`;
  
  const uploadResult = await cloudinary.uploader.upload(fileStr, {
    folder,
    resource_type: "raw", // important for PDFs
    format: "pdf",
  });

  return {
    url: uploadResult.secure_url,
    public_id: uploadResult.public_id,
  };
};