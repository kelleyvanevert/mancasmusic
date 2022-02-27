export type MancaPlayingData = {
  timestamp: number; // ms
  track: {
    imageUrl: string;
    name: string;
    uri: string;

    album: {
      name: string;
      uri: string;
    };
    artist: {
      name: string;
      uri: string;
    };
    context: {
      index: 0;
      name: string;
      uri: string;
    };
  };
  user: {
    imageUrl: string;
    name: string;
    uri: string;
  };
};
