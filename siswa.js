
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method allowed" });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxGouFauBoAj6Oaes-Ivs4HqVanxe6zO6R27X15bFmVfDUIyPAaDypvPfjJd8gaPM9z/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const result = await response.text();
    res.status(200).json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
