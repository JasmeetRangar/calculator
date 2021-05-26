import { useState } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    number: "",
    operator: ""
  })

}