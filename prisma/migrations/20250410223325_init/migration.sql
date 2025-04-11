-- CreateTable
CREATE TABLE
    "Usuario" (
        "id" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "rol" TEXT NOT NULL,
        CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Evento" (
        "id" TEXT NOT NULL,
        "tipo" TEXT NOT NULL,
        "datos" JSONB NOT NULL,
        "timestamp" TIMESTAMP(3) NOT NULL,
        "usuarioId" TEXT NOT NULL,
        CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Alerta" (
        "id" TEXT NOT NULL,
        "tipo" TEXT NOT NULL,
        "descripcion" TEXT NOT NULL,
        "resuelta" BOOLEAN NOT NULL DEFAULT false,
        "resueltaPor" TEXT,
        "eventoId" TEXT NOT NULL,
        CONSTRAINT "Alerta_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Metrica" (
        "id" TEXT NOT NULL,
        "nombre" TEXT NOT NULL,
        "valor" DOUBLE PRECISION NOT NULL,
        "periodo" TEXT NOT NULL,
        "fecha" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "Metrica_pkey" PRIMARY KEY ("id")
    );

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario" ("email");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerta" ADD CONSTRAINT "Alerta_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;