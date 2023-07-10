import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import URL from "../constant/config"

const useBlockSession = () => {
  const queryClient = useQueryClient();
  const blockSession = async (sessionObj) => {
    console.log(sessionObj);
    await axios.post(`${URL}/schedule/trainer/block`, sessionObj, {
      headers: {"Content-Type": "application/json"},
    }).then(res => res.data);
  }

  return useMutation({
      mutationFn: blockSession,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["session"],
        }).then(res => console.log(res));
      },
    }
  );
}

export default useBlockSession;