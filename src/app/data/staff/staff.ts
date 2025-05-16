type RawStaffItem = {
  id: string;
  name: string;
  position: string;
  entry: string;
  message_top: string;
  message_bottom: string;
  thumbnail: {
    url: string;
    width?: number;
    height?: number;
  };
};

type FormattedStaffItem = {
  slug: string;
  name: string;
  position: string;
  entry: string;
  message01: string;
  message02: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function formatStaffItems(
  contents: RawStaffItem[]
): FormattedStaffItem[] {
  return contents.map((item) => ({
    slug: item.id,
    name: item.name,
    position: item.position,
    entry: item.entry,
    message01: item.message_top,
    message02: item.message_bottom,
    image: {
      src: item.thumbnail.url,
      width: item.thumbnail.width ?? 400,
      height: item.thumbnail.height ?? 300,
      alt: item.name,
    },
  }));
}
