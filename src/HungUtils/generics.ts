interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function rankerr<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  console.log("🚀 ~ file: generics.ts:7 ~ ranks", ranks);
  return ranks.map((rank) => rank.item);
}
