"use client"

import React, { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface YouTubeEmbedProps {
  videoId: string
  className?: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, className }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}&vq=hd1080&showinfo=0&enablejsapi=1`
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe && iframe.contentWindow) {
      const message = JSON.stringify({
        event: "command",
        func: isInView ? "playVideo" : "pauseVideo",
        args: [],
      })
      iframe.contentWindow.postMessage(message, "*")
    }
  }, [isInView])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full z-10" />
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  )
}

export default YouTubeEmbed
