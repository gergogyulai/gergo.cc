// app/page.tsx
"use client"; // Since we need client-side interactivity
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [imageNumber, setImageNumber] = useState<number>(
    Math.floor(Math.random() * 20) + 1
  );
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Function to generate a new number and potentially play the audio
  const generateNewImage = () => {
    const newImageNumber = Math.floor(Math.random() * 20) + 1;
    setImageNumber(newImageNumber);

    if (newImageNumber === 6 && !audioPlaying) {
      const newAudio = new Audio("/mbdtf-assets/audio6.mp3");
      newAudio.play();
      setAudio(newAudio);
      setAudioPlaying(true);

      newAudio.addEventListener("ended", () => {
        setAudioPlaying(false); // Reset when audio ends
      });
    }
  };

  // Handle spacebar press to regenerate the image
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        generateNewImage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [audioPlaying]);

  // Ensure audio continues playing even if image changes
  useEffect(() => {
    if (audio && imageNumber !== 6) {
      audio.play(); // Keep playing the audio if imageNumber is not 6 but the audio was playing
    }
  }, [audio, imageNumber]);

  return (
    <main className="flex items-center justify-center min-h-screen min-w-max bg-[url('/mbdtf-assets/bg.png')] flex-col select-none">
      <div className="border-[#dfa34d] border-8">
        <Image
          className="w-56 h-56"
          src={`/mbdtf-assets/nothing${imageNumber}.png`}
          alt={`Image number ${imageNumber}`}
          width={500}
          height={500}
          priority
          onClick={generateNewImage}
        />
      </div>
    </main>
  );
}
