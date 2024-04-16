export const createUser = async (data: any, uid: string) => {
  try {
    const res = await fetch("/api/v1/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        uid: uid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 201) {
      return res;
    }

    return res.statusText.toString();
  } catch (err) {
    return { message: err };
  }
};
