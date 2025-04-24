import React from 'react';

export const Footer = () => {
    return (
        <div style={styles.footer}>
            © 2025 <strong>Instacampus</strong>. 
            {/* Built with <span style={styles.heart}>❤️</span> by CS Students. */} All rights reserved.
            {/* &nbsp;|&nbsp; */}
            <div>
                <a href="/privacy-policy" style={styles.link}>Privacy</a>
                &nbsp;|&nbsp;
                <a href="/terms" style={styles.link}>Terms</a>
                &nbsp;|&nbsp;
                <a href="/sitemap" style={styles.link}>Sitemap</a>
                &nbsp;|&nbsp;
                <a href="/purchase" style={styles.link}>Purchase</a>
            </div>
        </div>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        fontSize: '14px',
        padding: '20px 0',
        color: '#666',
        borderTop: '1px solid #ddd',
    },
    heart: {
        color: 'red',
    },
    link: {
        color: '#666',
        textDecoration: 'none',
        margin: '0 5px',
    },
};
