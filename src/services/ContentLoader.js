import ContentLoader from 'react-content-loader';

const HomeLoader = props => {
  // Get values from props
  // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

  // Hardcoded values
  const rows = 4;
  const columns = 5;
  const coverHeight = 300;
  const coverWidth = 240;
  const padding = 30;
  const speed = 1;

  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 35;
  const covers = Array(columns * rows).fill(1);

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      primaryColor="#242b34"
      secondaryColor="#343d4c"
      {...props}
    >
      <rect
        x="0"
        y="0"
        rx="0"
        ry="0"
        width={columns * coverWidthWithPadding - padding}
        height="20"
      />

      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
        let vx =
          (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="0"
            ry="0"
            width={coverWidth}
            height={coverHeight}
          />
        );
      })}
    </ContentLoader>
  );
};

const MovieLoader = () => {
  return (
    <ContentLoader
      width={1300}
      height={700}
      viewBox="0 0 700 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
      <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
      <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
      <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
      <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
      <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
      <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
      <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
      <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
      <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
      <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
      <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
      <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
    </ContentLoader>
  );
};

export { HomeLoader, MovieLoader };
