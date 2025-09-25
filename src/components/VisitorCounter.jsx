

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isNewVisitor = !localStorage.getItem("nandish_visited");
console.log("VisitorCounter mounted");

    const updateVisitorCount = async () => {
      const docRef = doc(db, "stats", "visitorCount");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const currentCount = docSnap.data().count;

        if (isNewVisitor) {
            console.log("New visitor detected");
          await updateDoc(docRef, {
            count: currentCount + 1,
          });
          localStorage.setItem("nandish_visited", "true");
          setCount(currentCount + 1);
        } else {
          setCount(currentCount);
        }
      } else {
        console.error("visitorCount document not found");
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <span className="text-sm text-muted-foreground">
      Visitors: <strong>{count}</strong>
    </span>
  );
}
