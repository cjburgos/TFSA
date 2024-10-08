import { Heading, Button, Collection, Card, Image, View, Divider } from '@aws-amplify/ui-react';
import tokens from '../../../tokenMeta.json';

function TokensCollection () {
  <Collection
    items={tokens}
    type="list"
    direction="row"
    gap="20px"
    wrap="nowrap"
  >
    {(item, index) => (
      <Card
        key={index}
        borderRadius="medium"
        maxWidth="20rem"
        variation="outlined"
      >
        <Image
          src={item.img}
        />
        <View padding="xs">
          <Divider padding="xs" />
          <Heading padding="medium">{item.shortName}</Heading>
          {/* <Button variation="primary" isFullWidth>
            Select
          </Button> */}
        </View>
      </Card>
    )}
  </Collection>
}

export default TokensCollection;