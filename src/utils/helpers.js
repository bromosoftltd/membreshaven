export const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  export function formatDate(dateStr) {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: 'numeric',
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateStr));
  }