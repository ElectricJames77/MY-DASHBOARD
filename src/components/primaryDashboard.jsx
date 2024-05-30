import { Box } from "@mui/system";
import {Orders , Item} from "./transactionbar";
import Stack from '@mui/material/Stack';

export default function Dashboard() {
   return(
        <>
            <Box
            height={200}
            width={200}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
            >
            DASHBOARD
            </Box>
            <Box>
                <Stack direction="row" spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>
            <Box>
                <Orders/>
            </Box>
        </>
    );
}