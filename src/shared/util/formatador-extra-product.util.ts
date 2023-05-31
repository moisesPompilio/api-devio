import { Extra } from 'src/modules/extra/domain/entities/extra.entity';

export async function formatterExtraProduct(
  extras: Extra[],
): Promise<string[]> {
  const extrasId: string[] = [];
  await extras.forEach(extra => {
    extrasId.push(extra.id);
  });
  return extrasId;
}
