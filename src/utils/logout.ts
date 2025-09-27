
export default function logout(): void | false {
  if (typeof window !== "undefined") {
    localStorage.clear();

    window.location.href = "/";
  }

  return false;
}
