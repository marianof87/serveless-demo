export default function handler(req: any, res: any) {
 const fecha = new Date().toLocaleString();
 res.status(200).json({ mensaje: "Hola desde Vercel!",
fecha });
 }