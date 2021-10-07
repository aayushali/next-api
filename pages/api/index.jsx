export default function handler(req, res) {
  //handle name is convention
  res.status(200).json({ name: "Home API route " });
}
