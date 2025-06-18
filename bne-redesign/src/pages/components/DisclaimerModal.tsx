"use client"

import { useState } from "react"
import {
  Dialog, DialogPortal, DialogOverlay, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
} from "../../components/ui/dialog"
import { AlertTriangle } from "lucide-react"
import { Button } from "../../components/ui/button"

export default function DisclaimerModal() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/70" />

        <DialogContent
          className="
            fixed left-1/2 top-1/2 z-50
            w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2
            rounded-xl bg-white p-6 shadow-2xl
          "
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Aviso Importante
            </DialogTitle>

            <DialogDescription className="pt-2 space-y-2 text-gray-700">
              <p>Esta no es la página oficial de la Bolsa Nacional de Empleo (BNE) de Chile.</p>
              <p>
                Es una <strong>reinvención UI</strong> con fines demostrativos.
                Para la versión oficial visita <span className="underline">www.bne.cl</span>.
              </p>
            </DialogDescription>
          </DialogHeader>

          <Button onClick={() => setOpen(false)} className="mt-6 w-full">
            Entendido
          </Button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
