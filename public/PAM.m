Am=5;
fm=20;

fc=50;

fs=8*fc;

t=0:1/fs:1;

mt=Am.*sin((2*pi*fm).*t);
ct=0.5.*square((2*pi*fc*t),50)+0.5;

st=mt.*ct;
subplot(3,1,1);
plot(t,mt);
subplot(3,1,2);
plot(t,ct);
subplot(3,1,3);
plot(t,st);


