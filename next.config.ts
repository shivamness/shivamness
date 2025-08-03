import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1J3AJ3OSwHYdAPlDQQrQ23TPDXIU1E6HV/view',
                permanent: false,
            }
           ] 
    },
};

export default nextConfig;
