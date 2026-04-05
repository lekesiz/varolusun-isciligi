import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface DiagramViewerProps {
  src: string;
  alt: string;
  caption?: string;
}

export function DiagramViewer({ src, alt, caption }: DiagramViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative group cursor-pointer overflow-hidden rounded-sm border border-border bg-card"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500 flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {caption && (
          <p className="px-4 py-3 text-sm text-muted-foreground text-center border-t border-border" style={{ fontFamily: "var(--font-display)" }}>
            {caption}
          </p>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-foreground hover:text-amber transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
