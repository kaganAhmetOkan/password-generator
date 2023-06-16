export default function generatePass({ incNumbers, incLower, incUpper, incSpecial, passLength }) {
  const numbers = "0123456789";
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specials = `!@#$%^&*()~-_=+[{]}|;:'",<.>/?`; // old: "!#$%&'()*+,-./:;<=>?@[]^_{|}~"
  let chars = "";
  let pass = "";

  if (incNumbers) chars += numbers;
  if (incLower) chars += lowers;
  if (incUpper) chars += uppers;
  if (incSpecial) chars += specials;

  for (let i = 0; i < passLength; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(rand);
  };

  return pass;
};