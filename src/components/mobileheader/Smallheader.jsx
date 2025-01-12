import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Smallheader = () => {
      const router = useRouter();
      const isActive = (path) => router.pathname === path;
  return (
    <>
      <div style={styles.container}>
        <header style={styles.header}>
          <nav style={styles.navbar}>
            <div>
              <a href="/" style={styles.image}>
                <img src="https://girmantech.com/Logo2.svg" alt="logo" />
              </a>
            </div>

            <DropdownMenu>
  <DropdownMenuTrigger><img src="/asset/menu.svg" alt="menubar" /></DropdownMenuTrigger>
  <DropdownMenuContent style={styles.drop}> 
    <DropdownMenuSeparator />
    <DropdownMenuItem style={styles.dropdown}><Link
                href="/search"
                style={
                  isActive("/search")
                    ? { ...styles.link, color: "blue", fontWeight: "bold" }
                    : { ...styles.link }
                }
                onMouseOver={(e) => {
                  (e.target.style.textDecoration = "underline"),
                    (e.target.style.color = "blue");
                }}
                onMouseOut={(e) => {
                  (e.target.style.textDecoration = "none"),
                    (e.target.style.color = "inherit");
                }}
              >
                SEARCH
              </Link></DropdownMenuItem>
    <DropdownMenuItem style={styles.dropdown}> <Link
                href="https://girmantech.com"
                target="_blank"
                onMouseOver={(e) => {
                  (e.target.style.textDecoration = "underline"),
                    (e.target.style.color = "blue");
                }}
                onMouseOut={(e) => {
                  (e.target.style.textDecoration = "none"),
                    (e.target.style.color = "inherit");
                }}
              >
                WEBSITE
              </Link></DropdownMenuItem>
    <DropdownMenuItem style={styles.dropdown}> <Link
                href="https://www.linkedin.com/company/girmantech"
                target="_blank"
                onMouseOver={(e) => {
                  (e.target.style.textDecoration = "underline"),
                    (e.target.style.color = "blue");
                }}
                onMouseOut={(e) => {
                  (e.target.style.textDecoration = "none"),
                    (e.target.style.color = "inherit");
                }}
              >
                LINKEDIN
              </Link></DropdownMenuItem>
    <DropdownMenuItem style={styles.dropdown}><a
                href="mailto:contact@girmantech.com"
                onMouseOver={(e) => {
                  (e.target.style.textDecoration = "underline"),
                    (e.target.style.color = "blue");
                }}
                onMouseOut={(e) => {
                  (e.target.style.textDecoration = "none"),
                    (e.target.style.color = "inherit");
                }}
              >
                CONTACT
              </a></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          </nav>
        </header>
      </div>
    </>
  )
}

export default Smallheader
const styles = {
    container: {
      display : "block",
      textAlign: "center",
      padding: "10px 30px",
      height: "60px",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      position: "sticky",
      fontSize : "15px"
    },
    image: { height: "40px" },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      fontSize: "20px",
    },
    header: { marginBottom: "20px" },
    link: {
      textDecoration: "none",
      color: "inherit",
      fontWeight: "normal",
    },
    dropdown : {
        backgroundColor : "white",
        marginRight : "25px",
        padding : '10px 25px',
    },
    drop :  {
        fontSize: "15px",
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }

}