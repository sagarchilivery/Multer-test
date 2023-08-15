"use client";
import axios from "axios";
import React, { useState } from "react";

export default function Page() {
  const [image, setImage] = useState<any>();

  const HanleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("image: ", image);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:1337/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("res: ", res);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div>
      <form onSubmit={HanleSubmit}>
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={(e: any) => {
            console.log("sagar");
            setImage(e.target.files[0]);
          }}
        />
        <button className="border" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
