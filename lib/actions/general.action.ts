import { db } from "@/firebase/admin";

export async function getInterviewById(interviewId: string): Promise<Interview | null> {
  const interview = await db 
      .collection("interviews")
      .doc(interviewId)
      .get();
   
   return interview.data() as Interview | null;
}

