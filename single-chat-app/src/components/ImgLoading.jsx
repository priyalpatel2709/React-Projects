import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ImgLoading = () => {
  return (
    <Stack>
      <Skeleton height="100px" width='100px' />
    </Stack>
  );
};

export default ImgLoading;
