// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === 'POST') {
		res.status(200).json({ name: 'John Doe', method: req.method });
	} else {
		res.status(201).json({ name: 'Name Surname', method: req.method });
	}
}
