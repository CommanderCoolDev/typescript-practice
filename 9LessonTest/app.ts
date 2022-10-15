enum QuestionStatus {
  Publisher = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

async function getFlags(req: {
  topicId: number;
  status: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const ress = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await ress.json();
  return data;
}
