fm=10;
fc=20;
am=1;
fs=1000;
t=0:1/fs:1;
A=5;
c=A.*sawtooth(2*pi*fc*t);        %sawtooth
subplot(3,1,1);

mt=2.*sin(2*pi*fm*t);   % message amplitude must be less than sawtooth amplitude
 

for i=1:length(c)
 if(mt(i)>=c(i))
    pwm(i)=1;
 else
    pwm(i)=0;
 end
end

subplot(3,1,1);
plot(t,mt);

subplot(3,1,2);
plot(t,c);

subplot(3,1,3)
plot(t,pwm);


     
