import { Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import './App.css'
import Home from './Home'
import ShopifyApp from './pages/Expertise/ShopifyApp'
import CustomShopify from './pages/Expertise/CustomShopify'
import CustomApp from './pages/Expertise/CustomApp'
import Website from './pages/Expertise/Website'
import DigitalMarketing from './pages/Expertise/DigitalMarketing'
import Ecommerce from './pages/Expertise/E-commerce'
import AboutUs from './pages/AboutUs/Aboutus'
import Careers from './pages/Carrers/Careers'
import Contact from './pages/Contact/Contact'
import MetaMatrixApp from './pages/Apps/MetamatrixApp'
import MultiVendorApp from './pages/Apps/MultivendorApp'
import Tap2shareApp from './pages/Apps/Tap2share'
import VisualSearchPage from './pages/Apps/VisualSearchApp'
import DeskribeApp from './pages/Apps/DeskribeApp'

import DeskribeDocs from './pages/DeskribeDocs'
import BPOSection from './pages/Home/BPO'
import BPOServices from './pages/Expertise/BPOServices'
import ConversifyApp from './pages/Apps/ConversifyApp'
import EdutechApp from './pages/Apps/EdutechApp'
import MetametrixDocs from './pages/MetametrixDocs'



// Global theme for your entire application
const theme = createTheme({
  palette: {
    primary: {
      main: '#0e3b39',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4caf50',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#EFF9F9',
    },
    divider: '#e0e0e0'
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 700,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: 'none'
        }
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>

        <Route path='/deskribeDocumentation' element={<DeskribeDocs/>}/>
        <Route path='/metametrixDocumentation' element={<MetametrixDocs/>}/>
        <Route path='/BPOServices' element={<BPOServices/>}/>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Expertise Routes */}
        <Route path="/shopify-app" element={<ShopifyApp />} />
        <Route path="/custom-store" element={<CustomShopify />} />
        <Route path="/custom-app" element={<CustomApp />} />
        <Route path="/website-management" element={<Website />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/e-commerce-management" element={<Ecommerce />} />
        <Route path='/bpo' element={<BPOSection/>}/>
        
        {/* Apps Routes */}
        <Route path="/metamatrix-app" element={<MetaMatrixApp />} />
        <Route path="/multivendor-app" element={<MultiVendorApp />} />
        <Route path="/tap2share-app" element={<Tap2shareApp />} />
        <Route path="/visual-search-app" element={<VisualSearchPage />} />
       <Route path='/deskribe-app' element={<DeskribeApp />}/>
       <Route path='/conversify-app' element={<ConversifyApp/>}/>
       <Route path='/edutech-app' element={<EdutechApp/>}/>
     
    
      </Routes>
    </ThemeProvider>
  )
}

export default App