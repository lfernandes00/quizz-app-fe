/**
 * Dummy data for development tests
 * Will be deleted when api requests are finished
 */

interface IPost {
  id: number;
  avatar?: string;
  name: string;
  username: string;
  description: string;
  image?: string;
  data?: string;
}

export const posts: IPost[] = [
  {
    id: 1,
    name: "Mário Freitas",
    username: "mfreitas98",
    description: `Hey quiz enthusiasts! We've just added a new category of quizzes to our app - "80s Movie Trivia"! Test your knowledge of classic movies like The Breakfast Club, Ferris Bueller's Day Off, and E.T. the Extra-Terrestrial.`
    // image:
    //   "https://hips.hearstapps.com/hmg-prod/images/80-movies-1570826605.png?crop=0.984xw:0.984xh;0,0&resize=640:*"
  },
  {
    id: 2,
    name: "Pedro Ferreira",
    username: "pedro.sferreira",
    image: "/avatar.png",
    description: `Are you a history buff? Put your knowledge to the test with our "World History Challenge" quiz!`
    // image: "https://cdn.britannica.com/26/188426-050-2AF26954/Germany-Poland-September-1-1939.jpg"
  }
];
