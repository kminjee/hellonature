package com.hellonature.hellonature_back.config.security.main;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        super.setAuthenticationManager(authenticationManager);
    }

//    @Override
//    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
//        HttpServletRequest request = (HttpServletRequest) req;
//        HttpServletResponse response = (HttpServletResponse) res;
//        String username = obtainUsername(request);
//        String password = obtainPassword(request);
//        if(StringUtils.isEmpty(username)) {
//            username = "";
//        }
//        if(StringUtils.isEmpty(password)) {
//            password = "";
//        }
//        username = username.trim();
//        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
//        SecurityContextHolder.getContext().setAuthentication(authRequest);
//        authRequest.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//        chain.doFilter(request, response);
//
//    }
}
