import { useState } from "react";

// Define types for the response
type ResponseType = 'success' | 'error';

interface SubmitResponse {
  type: ResponseType;
  message: string;
}

// Define type for submit data
export interface SubmitData {
  firstName: string;
  email: string;
  type: string;
  comment: string;
  [key: string]: string;
}

const wait = (ms: number): Promise<void> => 
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that simulates an API call for form submission
 * It uses Math.random() to simulate a 50% chance of success or failure
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (url: string, data: SubmitData): Promise<void> => {
    const random = Math.random();
    setLoading(true);
    
    try {
      await wait(2000);
      
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
