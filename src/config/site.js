export function constructMetadata({
  title = "Mehta Electrical & Communication ",
  description = "Govenment Approved 'A' Class Electrical Contractor authorised upto ETH Level",
  image = "/company_logo.svg",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Pranav Arya",
    },
    icons,
    metadataBase: new URL("https://mehta-electrical.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
