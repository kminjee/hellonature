package com.hellonature.hellonature_back.service;

import com.hellonature.hellonature_back.model.SecurityMemberLoginDTO;
import com.hellonature.hellonature_back.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor //전달 받은 값이 존재함
@Service
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(11);
        System.out.println("userDetail");
        return memberRepository.findByEmail(username)
                .map(member -> new SecurityMemberLoginDTO(member, member.getEmail(), member.getPassword(), member.getRole()))
                .orElse(null);
    }
}
