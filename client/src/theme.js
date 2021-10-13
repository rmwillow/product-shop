import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    backgroundColor: "white",
                },
                body: {
                    backgroundColor: "white",
                },
            },
        },
    },

    typography: {
        fontFamily:"'Playfair Display', serif",
        // h5: {
        //     fontWeight: 700,
        //     fontSize: "2rem",
        // },
        h1: {
            fontFamily: "'Playfair Display', serif",
        },
        h3: {
            fontFamily: "'Playfair Display', serif",
        },
        subtitle1: {
            fontFamily: "'Playfair Display', serif",
        },
    },
});
export default theme;
