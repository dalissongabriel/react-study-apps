import { Typography } from "@material-ui/core"
import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
    return (
        <Typography
          component="h1"
          align="center"
          color="primary">
              {children}
        </Typography>
    )
}