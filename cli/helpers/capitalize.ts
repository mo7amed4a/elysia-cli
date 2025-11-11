export function getSingularAndPlural(str: string) {
  const lower = str.toLowerCase();

  // Words that should not be pluralized (irregular or uncountable)
  const irregularWords = ["auth", "news", "data", "information", "equipment", "software"];

  let singular = lower;
  let plural = "";

  if (irregularWords.includes(lower)) {
    plural = lower; // same word for plural
  }
  // If word ends with 'y' preceded by a consonant (e.g., category → categories)
  else if (lower.endsWith("y") && !"aeiou".includes(lower.charAt(lower.length - 2))) {
    plural = lower.slice(0, -1) + "ies";
  }
  // If word ends with s, x, z, ch, or sh (e.g., box → boxes)
  else if (/(s|x|z|ch|sh)$/.test(lower)) {
    plural = lower + "es";
  }
  // Default case (e.g., user → users)
  else {
    plural = lower + "s";
  }

  // Capitalize first letter for class names or exports
  const capitalizedSingular = singular.charAt(0).toUpperCase() + singular.slice(1);
  const capitalizedPlural = plural.charAt(0).toUpperCase() + plural.slice(1);

  return {
    singular,
    plural,
    capitalizedSingular,
    capitalizedPlural
  };
}
