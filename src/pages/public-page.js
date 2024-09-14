import React, {useEffect, useMemo, useState} from "react";
import {PageLayout} from "../components/page-layout";
import {apiFindAllClients} from "../services/message.service";
import {MaterialReactTable, type MRT_ColumnDef, useMaterialReactTable} from 'material-react-table';
import {createTheme, ThemeProvider, useTheme} from '@mui/material';

type Client = {
    firstName: string; //
    lastName: string; //
    phoneNumber: string; //
    info: string;
};

const columns: MRT_ColumnDef<Client>[] = [ //
    {
        accessorKey: 'id', header: 'Id'
    }, //
    {
        accessorKey: 'firstName', header: 'First Name',
    }, //
    {
        accessorKey: 'lastName', header: 'Last Name',
    }, //
    {
        accessorKey: 'phoneNumber', header: 'Phone Number',
    }, //
    {
        accessorKey: 'info', header: 'Info',
    } //
];

export const PublicPage = () => {

    const [clients, setClients] = useState("");

    const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

    const tableTheme = useMemo(() => createTheme({
        palette: {
            mode: globalTheme.palette.mode, //let's use the same dark/light mode as the global theme
            primary: globalTheme.palette.secondary, //swap in the secondary color as the primary for the table
            info: {
                main: 'rgb(255,122,0)', //add in a custom color for the toolbar alert background stuff
            }, background: {
                default: globalTheme.palette.mode === 'light' ? 'rgb(254,255,244)' //random light yellow color for the background in light mode
                    : '#000', //pure black table in dark mode for fun
            },
        }, typography: {
            button: {
                textTransform: 'none', //customize typography styles for all buttons in table by default
                fontSize: '2.2rem',
            },
        }, components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: '2.2rem', //override to make tooltip font size larger
                    },
                },
            }, MuiTableCell: {
                fontSize: '10rem',
            }, MuiSwitch: {
                styleOverrides: {
                    thumb: {
                        color: 'pink', //change the color of the switch thumb in the columns show/hide menu to pink
                    },
                },
            },
        },
    }), [globalTheme],);

    const table = useMaterialReactTable({
        columns, //
        data: clients, //
        enableRowSelection: true, //
        enableColumnOrdering: true, //
        enableColumnPinning: true //
    });

    useEffect(() => {
        const findAllClients = async () => {
            const {data, error} = await apiFindAllClients();

            if (data) {
                return data;
            }

            if (error) {
                console.error(error);
            }
        };

        findAllClients()
            .then(clients => {
                setClients(clients);
            });
    }, []);

    return (<PageLayout>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Clients Page
            </h1>
            <div className="content__body">
                <ThemeProvider theme={tableTheme}>
                    <MaterialReactTable table={table}/>
                </ThemeProvider>
            </div>

            <pre>
                 {JSON.stringify(clients, null, 2)}
            </pre>
        </div>
    </PageLayout>);
};
