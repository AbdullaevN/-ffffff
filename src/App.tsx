import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contacts';
import Faq from './pages/Faq';
import LoginPage from './pages/LoginPage';
import Registration from './pages/Registration';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/Shipping';
import RefundAndReturn from './pages/RefundAndReturn';
// import CheckoutPage from './pages/CheckoutPage'; // Добавим позже
// import ProfilePage from './pages/ProfilePage'; // Добавим позже
// import NotFound from './pages/NotFound'; // Добавим позже

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/refund-and-return" element={<RefundAndReturn />} />
                
                {/* Защищенные маршруты (добавим позже) */}
                {/* <Route path="/checkout" element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } /> */}
                
                {/* 404 страница */}
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Layout>
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;