export const getInputValues = (e: any) => {
  const name = e.target[0];
  const email = e.target[1];
  const message = e.target[2];

  return { name, email, message };
};
