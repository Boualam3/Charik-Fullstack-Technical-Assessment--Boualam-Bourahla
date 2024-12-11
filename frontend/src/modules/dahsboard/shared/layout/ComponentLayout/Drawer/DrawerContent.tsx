// project import
import SimpleBarScroll from "@/components/third-party/SimpleBar"
import Navigation from "./Navigation"

// ==============================|| DRWAER CONTENT ||============================== //

const DrawerContent = ({ searchValue }: { searchValue?: string }) => (
  <SimpleBarScroll
    sx={{
      height: { xs: "calc(100vh - 70px)", md: "calc(100% - 70px)" },
      "& .simplebar-content": {
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <Navigation searchValue={searchValue} />
  </SimpleBarScroll>
)

export default DrawerContent
