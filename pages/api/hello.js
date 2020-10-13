// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// a good use is for handling form input
export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
