import { useState } from "react";

type ResponseType = "success" | "error";

interface SubmitResponse {
  type: ResponseType;
  message: string;
}

export interface SubmitData {
  name: string;
  email: string;
  type?: string;
  message: string;
}

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/luiscaceresd97@gmail.com";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (_url: string, data: SubmitData): Promise<void> => {
    setLoading(true);
    setResponse(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("project_type", data.type || "Not specified");
      formData.append("message", data.message);
      formData.append("_subject", `Portfolio contact from ${data.name}`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");

      const result = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!result.ok) {
        throw new Error(`Contact form failed with status ${result.status}`);
      }

      setResponse({
        type: "success",
        message: `Thanks ${data.name}. Your message was sent to Luis.`
      });
    } catch (error) {
      setResponse({
        type: "error",
        message:
          "The form could not send right now. Email Luis directly at luiscaceresd97@gmail.com."
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
