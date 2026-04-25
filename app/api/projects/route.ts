import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const basePath = path.join(process.cwd(), "public/images")

    const folders = fs.readdirSync(basePath)

    const projects = folders.map((folder) => {
      const folderPath = path.join(basePath, folder)

      if (!fs.statSync(folderPath).isDirectory()) return null

      const files = fs.readdirSync(folderPath)

      const images = files
        .filter((file) =>
          [".jpg", ".jpeg", ".png", ".webp"].includes(
            path.extname(file).toLowerCase()
          )
        )
        .map((file) => `/images/${folder}/${file}`)

      // ❌ Skip empty folders (fixes blank cards like Dining issue)
      if (images.length === 0) return null

      // 🔥 Category mapping
      let category = "Home"

      const name = folder.toLowerCase()

      if (["office", "conference-room", "meeting-room"].includes(name)) {
        category = "Office"
      } else if (
        ["balcony", "balcony & cafe", "cafe", "outdoor"].includes(name)
      ) {
        category = "Outdoor"
      }

      return {
        title: folder
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),

        category,
        images,
      }
    }).filter(Boolean)

    return Response.json(projects)
  } catch (error) {
    return Response.json(
      { error: "Failed to load images" },
      { status: 500 }
    )
  }
}