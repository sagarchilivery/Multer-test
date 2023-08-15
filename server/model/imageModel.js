import mongoose from "mongoose";

const ImageSchema = mongoose.Schema(
  {
    image: String,
  },
  {
    timestamps: true,
    collection: "ImageDetails123456",
  }
);

export default mongoose.model("Image123", ImageSchema);
